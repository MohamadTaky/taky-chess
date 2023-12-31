import { pusherServer } from "@/lib/pusher";
import {toPusherKey} from "@/utils/pusher";
import { postRequestValidator } from "@/utils/validators/room/heartbeat/validator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params: { roomId } }: { params: { roomId: string } }) {
  const body = await req.json();
  const data = postRequestValidator.parse(body);
  try {
    await pusherServer.trigger(toPusherKey(`presence-room:${roomId}`), "heartbeat", null, {
      socket_id: data.socketId,
    });
    return NextResponse.json(null, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
