export const prerender = false;

import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";

export const GET: APIRoute = async ({ params, request }) => {

    const clientId = params.clientId;

    const body  =  {
        method: 'GET',
        clientId: clientId
    }

    return new Response(JSON.stringify(body), {status: 200, headers: {'Content-Type': 'application/json'} });
};

export const PATCH: APIRoute = async ({ params, request }) => {
    const clientId = params.clientId ?? '';

    try {
        const { id, ...body } = await request.json();

        // Update xxx=xxx in the table
        const results = await db.update(Clients).set(body)
            .where(eq(Clients.id, +clientId));
        
        const updatedClient = await db.select().from(Clients).where(eq(Clients.id, +clientId));

        return new Response(JSON.stringify(
            updatedClient.at(0),
        ), {status: 201, headers: {'Content-Type': 'application/json'} });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), {status: 400, headers: {'Content-Type': 'application/json'} });
    }
};

export const DELETE: APIRoute = async ({ params, request }) => {
    const clientId = params.clientId ?? '';

    const { rowsAffected} = await db.delete(Clients).where(eq(Clients.id, +clientId));
    
    if (rowsAffected > 0) {
        return new Response(JSON.stringify({msg: 'Client deleted'}), {status: 200, headers: {'Content-Type': 'application/json'} });
    }

    return new Response(JSON.stringify({msg: 'Client not deleted'}), {status: 400, headers: {'Content-Type': 'application/json'} });
};
