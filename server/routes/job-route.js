const {
  addJob,
  updateJob,
  deleteJob,
  getAllJobs,
  getAllJobsByUserId,
  getJobByJobId,
} = require("../controllers/job-controller");

const express = require("express");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Jobs
 *     description: Operations related to jobs
 * /getAllJobs:
 *   get:
 *     tags:
 *       - Jobs
 *     summary: Get all jobs
 *     description: Get a list of all jobs
 *     responses:
 *       200:
 *         description: List of jobs
 * /addJob:
 *   post:
 *     tags:
 *       - Jobs
 *     summary: Adds a new job
 *     description: Adds a new job
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *               position:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job created successfully
 *       400:
 *         description: Bad request, missing or invalid parameters
 * /job?:id:
 *   put:
 *     tags:
 *       - Jobs
 *     summary: Updates a job
 *     description: Updates a job
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the job to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *               position:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       400:
 *         description: Bad request, missing or invalid parameters
 * /delete:
 *   delete:
 *     tags:
 *       - Jobs
 *     summary: Deletes a job
 *     description: Deletes a job
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the job to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *               position:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       400:
 *         description: Bad request, missing or invalid parameters
 */

router.route("/addJob").post(addJob);
router.route("/job?:id").put(updateJob).delete(deleteJob);
router.route("/getAllJobs").get(getAllJobs);
router.route("/jobs?:userId").get(getAllJobsByUserId);
router.route("/job?:id").get(getJobByJobId);

module.exports = router;
