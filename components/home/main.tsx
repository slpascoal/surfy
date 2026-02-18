import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Main() {
  return (
    <main>
      <div className="homeWelcome">
        <h2>Olá Fulano</h2>
        <p>Quarta, 18 de fevereiro.</p>

        <div className="homeSearch">
          <Input placeholder="Buscar..."/>
          <Button>
            <SearchIcon />
          </Button>
        </div>
      </div>
    </main>
  );
}
