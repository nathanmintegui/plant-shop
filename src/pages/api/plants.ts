import { NextResponse } from "next/server"

import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const plants = await prisma.plant.findMany()

        res.json(plants)
    } catch (e) {
        return NextResponse.json({ message: "GET error", e }, { status: 500 })
    }
}
