import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DonatePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Card className="max-w-lg w-full p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">Make a Donation</h1>
        <p className="text-center text-gray-600 mb-6">
          Your support helps us continue our mission.
        </p>
        <CardContent className="space-y-4">
          <Input type="text" placeholder="Full Name" className="w-full" />
          <Input type="email" placeholder="Email Address" className="w-full" />
          <Input
            type="number"
            placeholder="Donation Amount ($)"
            className="w-full"
          />
          <Textarea placeholder="Message (optional)" className="w-full" />
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl">
            Donate Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonatePage;
