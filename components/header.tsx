import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import "../app/_styles/header.css";

export default function Header() {
  return (
    <header>
        <Card className="headerCard">
            <CardContent className="headerContent">
                <span className="logo">Surfy</span>
                <Button size="icon" variant="ghost">
                    <MenuIcon />
                </Button>
            </CardContent>
        </Card>
    </header>
  );
}