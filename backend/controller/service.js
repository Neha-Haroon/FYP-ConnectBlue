const express = require("express");
const { isSeller, isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Service = require("../model/service");
const Order = require("../model/order");
const Shop = require("../model/shop");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");

// create service
router.post(
  "/create-service",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid!", 400));
      } else {
        let images = [];

        if (typeof req.body.images === "string") {
          images.push(req.body.images);
        } else {
          images = req.body.images;
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "services",
          });

          imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }

        const serviceData = req.body;
        serviceData.images = imagesLinks;
        serviceData.shop = shop;

        const service = await Service.create(serviceData);
        console.log("serviceData : " + serviceData);
        console.log("service : " + service);
        res.status(201).json({
          success: true,
          service,
        });
      }
    } catch (error) {
      console.log("service error: " + error);
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all services of a shop
router.get(
  "/get-all-services-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const services = await Service.find({ shopId: req.params.id });

      res.status(201).json({
        success: true,
        services,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// delete service of a shop
router.delete(
  "/delete-shop-service/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const service = await Service.findById(req.params.id);

      if (!service) {
        return next(new ErrorHandler("Service is not found with this id", 404));
      }

      for (let i = 0; 1 < service.images.length; i++) {
        const result = await cloudinary.v2.uploader.destroy(
          service.images[i].public_id
        );
      }

      await service.remove();

      res.status(201).json({
        success: true,
        message: "Service Deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all services
router.get(
  "/get-all-services",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const services = await Service.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        services,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// review for a service
router.put(
  "/create-new-review",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { user, rating, comment, serviceId, orderId } = req.body;

      const service = await Service.findById(serviceId);

      const review = {
        user,
        rating,
        comment,
        serviceId,
      };

      const isReviewed = service.reviews.find(
        (rev) => rev.user._id === req.user._id
      );

      if (isReviewed) {
        service.reviews.forEach((rev) => {
          if (rev.user._id === req.user._id) {
            (rev.rating = rating), (rev.comment = comment), (rev.user = user);
          }
        });
      } else {
        service.reviews.push(review);
      }

      let avg = 0;

      service.reviews.forEach((rev) => {
        avg += rev.rating;
      });

      service.ratings = avg / service.reviews.length;

      await service.save({ validateBeforeSave: false });

      await Order.findByIdAndUpdate(
        orderId,
        { $set: { "cart.$[elem].isReviewed": true } },
        { arrayFilters: [{ "elem._id": serviceId }], new: true }
      );

      res.status(200).json({
        success: true,
        message: "Reviwed succesfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// all services --- for admin
router.get(
  "/admin-all-services",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const services = await Service.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        services,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);/* 
 // Route to search for services based on shop area
router.get("/search", async (req, res) => {
  try {
    const { area } = req.query;

    // Check if area parameter is provided
    if (!area) {
      return res.status(400).json({ error: "Area parameter is required." });
    }

    // Search for services with shop area matching the provided area
    const services = await Service.find({
      "shop.area": { $regex: new RegExp(area, "i") }, // Case-insensitive search
    });

    res.json({ services });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
 */
module.exports = router;
