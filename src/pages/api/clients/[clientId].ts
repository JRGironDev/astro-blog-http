export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {

    const clientId = params.clientId;

    const body  =  {
        method: 'GET',
        clientId: clientId
    }

    return new Response(JSON.stringify(body), {status: 200, headers: {'Content-Type': 'application/json'} });
};

export const PATCH: APIRoute = async ({ params, request }) => {
    const clientId = params.clientId;

    const body  =  {
        method: 'PATCH',
        clientId: clientId
    }

    return new Response(JSON.stringify(body), {status: 200, headers: {'Content-Type': 'application/json'} });
};

export const DELETE: APIRoute = async ({ params, request }) => {
    const clientId = params.clientId;

    const body  =  {
        method: 'DELETE',
        clientId: clientId
    }

    return new Response(JSON.stringify(body), {status: 200, headers: {'Content-Type': 'application/json'} });
};
