import type { Request, Response } from "express";
import { z } from "zod";
import stripe from "../../lib/stripe";
import config from "../../config";
import { catchAsync } from "../../utils/catch-async";
import { sendResponse } from "../../utils/send-response";
import { AppError } from "../../utils/app-error";
import { 
    completePayment,
    createCheckoutSession,
} from "./payment.service";
import prisma from "../../lib/prisma";

const bookingIdParamSchema = z.