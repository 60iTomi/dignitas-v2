'use client'

import { Button } from "@/components/ui/button";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Barcode from "react-barcode";

export default function Home() {
  return (
    <div className="entry-page-container">
      <Card className="cards py-3">
        <CardHeader className="px-3">
          <CardTitle>KFC Győr, Baross út</CardTitle>
          <CardDescription>9021 Győr, Baross Gábor út 24.</CardDescription>
          <CardAction>
            <Button variant="link">Problémád akadt?</Button>
          </CardAction>
        </CardHeader>
        <CardDescription>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-2">
            A mosdó használatához az alábbi kódra lesz szükséged.
          </h3>
        </CardDescription>
      </Card>
      <Card className="cards py-3">
        <Barcode value="3333333" className="barcode"/>
      </Card>
    </div>
  );
}
