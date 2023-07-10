import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(NextApiRequest, NextApiResponse) {
    const res = NextApiResponse;
    const req = NextApiRequest;

    const {prefix} = req.query;

    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&q=${prefix}`;
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': process.env.TASTY_API_KEY,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.status(200).json(data);
    }catch (error) {
        console.log(error);
    }

}