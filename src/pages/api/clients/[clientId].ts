import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {

    const {clientId = ''} = params;

    const responseObj = JSON.stringify({ method: 'GET', clientId });

    return new Response(responseObj, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const PATCH: APIRoute = async ({ params, request }) => {

    const {clientId = ''} = params;

    const responseObj = JSON.stringify({ method: 'PATCH', clientId });

    return new Response(responseObj, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const DELETE: APIRoute = async ({ params, request }) => {

    const {clientId = ''} = params;

    return new Response(JSON.stringify({ method: 'DELETE', clientId }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

