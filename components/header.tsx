import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Header() {
  return (
    <header>
        <Card>
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