import express from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'

import Post from '../db/models/post.model.js'

dotenv.config()

const router = express.Router()