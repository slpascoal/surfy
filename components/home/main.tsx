import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage } from "../ui/avatar";
import "../../styles/home.css";
import Image from "next/image";

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

        <div className="homeBanner">
          <Image 
            alt="Agende nos melhores"
            src="/bannerPizza.png"
            fill
            className="homeBannerImage"
          />
        </div>

        <Card className="homeAgendamentos">
          <CardContent className="agendamentosContent">
            <div className="agendamentosDetails">
              <Badge>Confirmado</Badge>
              <h3>Corte de Cabelo</h3>

              <div className="agendamentosCompany">
                <Avatar>
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                </Avatar>
                <p>Barbearia Teste</p>
              </div>
            </div>

            <div className="agendamentosDate">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">16:30</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
