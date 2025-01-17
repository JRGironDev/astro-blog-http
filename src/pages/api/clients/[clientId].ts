import prisma from "@db";
import type { APIRoute } from "astro";

export const prerender = false;

const findClientById = async (clientId: string) => {
    try {
        const client = await prisma.client.findUnique({
            where: {
                id: clientId,
            }
        })

        return client;
    } 
    catch (error) {
        console.log(error);
        return null;
    }
}

export const GET: APIRoute = async ({ params, request }) => {

    const {clientId = ''} = params;

    try {
        const client = await findClientById(clientId);
        
        if (!client) {
            return new Response(JSON.stringify({ msg: 'No client found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    
        const responseObj = JSON.stringify({ method: 'GET', client });
    
        return new Response(responseObj, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } 
    catch (error) {
        return new Response(JSON.stringify({ msg: 'Bad Request' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};

export const PATCH: APIRoute = async ({ params, request }) => {

    const {clientId = ''} = params;

    const client = await findClientById(clientId);

    if (!client) {
        return new Response(JSON.stringify({ msg: 'No client found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const { id, ...body } = await request.json();

        const updatedClient = await prisma.client.update({
            where: {
                id: clientId,
            },
            data: body,
        });

        const responseObj = JSON.stringify({ method: 'PATCH', updatedClient });

        return new Response(responseObj, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } 
    catch (error) {
        return new Response(JSON.stringify({ msg: 'Bad Request' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};

export const DELETE: APIRoute = async ({ params, request }) => {

    const {clientId = ''} = params;

    const client = await findClientById(clientId);

    if (!client) {
        return new Response(JSON.stringify({ msg: 'No client found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const deletedClient = await prisma.client.delete({
            where: {
                id: clientId,
            },
        });

        const responseObj = JSON.stringify({ method: 'DELETE', deletedClient });

        return new Response(responseObj, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    catch (error) {
        return new Response(JSON.stringify({ msg: 'Bad Request' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};

