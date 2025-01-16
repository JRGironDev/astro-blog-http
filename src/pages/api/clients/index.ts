export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
    const body  =  {
        method: 'GET'
    }

    return new Response(JSON.stringify(body), {status: 200, headers: {'Content-Type': 'application/json'} });
};

export const POST: APIRoute = async ({ params, request }) => {
    const body  =  {
        method: 'POST'
    }

    return new Response(JSON.stringify(body), {status: 201, headers: {'Content-Type': 'application/json'} });
};



