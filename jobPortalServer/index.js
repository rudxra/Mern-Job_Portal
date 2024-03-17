const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 3000;
require('dotenv').config()


app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.9a5ma3x.mongodb.net/?retryWrites=true&w=majority&appName=job-portal`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db("mernJobPortal");
        const jobCollections = db.collection("demoJobs");

        // POST a job
        app.post("/post-job", async (req, res) => {
            try {
                const body = req.body;
                body.createAt = new Date();
                const result = await jobCollections.insertOne(body);
                if (result.insertedId) {
                    return res.status(200).send(result)
                    ;
                } else {
                    return res.status(404).send({
                        message: "Cannot insert! Try again later",
                        status: false
                    });
                }
            } catch (error) {
                console.error("Error posting job:", error);
                res.status(500).send({
                    message: "Server error",
                    status: false
                });
            }
        });

        // GET all jobs
        app.get("/all-jobs", async (req, res) => {
            try {
                const jobs = await jobCollections.find({}).toArray();
                res.send(jobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                res.status(500).send({
                    message: "Server error",
                    status: false
                });
            }
        });

        // get single job using id
        app.get("/all-jobs/:id", async(req, res) => {
            const id = req.params.id;
            const job = await jobCollections.findOne({
                _id:new ObjectId(id)

            })
            res.send(job)
        })


        // get single job using id
app.get("/all-jobs/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const job = await jobCollections.findOne({
            _id: new ObjectId(id)
        });
        res.send(job);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

        // get jobs by email
        app.get("/myJobs/:email", async(req , res) =>{
            // console.log(req.params.email)
            const jobs = await jobCollections.find({postedBy :req.params.email}).toArray();
            res.send(jobs)
        })

        //delete a job
        app.delete("/job/:id" , async(req,res) =>{
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)}
            const result = await jobCollections.deleteOne(filter);
            res.send(result)
            
        })


        // update a jobs
        app.patch("/update-job/:id", async(req,res) =>{
            const id = req.params.id;
            const jobData = req.body;
            const filter = {_id: new ObjectId(id)};
            const options = {upsert:true};
            const updateDoc ={
            $set:{
                ...jobData

            },
        };
        const result = await jobCollections.updateOne(filter, updateDoc, options);
        res.send(result)
    })

  


        // Start the Express server
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the application if unable to connect to MongoDB
    }
}

connectDB();
