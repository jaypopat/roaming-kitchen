import type { NextRequest } from 'next/server';

export async function middleware(nextRequest: NextRequest) {
  console.log('middleware is happening!');

  // check if user is authenticated

}