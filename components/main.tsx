import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scissors, SearchIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import "../styles/home.css";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import CompaniesCard from "./companiesCard";

export default async function Main() {
  const companies = await prisma.companies.findMany({});
  const popularCompanies = await prisma.companies.findMany({
    orderBy: {
      name: "desc",
    },
    take: 5,
  });

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

        <div className="buscaRapida">
          <Button className="buscaRapidaButton">
            <Scissors />
            Cabelo
          </Button>

          <Button className="buscaRapidaButton">
            <Image
              src="/barba.svg"
              alt="Barba"
              width={16}
              height={16}
            />
            Barba
          </Button>

          <Button className="buscaRapidaButton">
            <Image
              src="/acabamento.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>

          <Button className="buscaRapidaButton">
            <Image
              src="/hidratacao.svg"
              alt="Hidratação"
              width={16}
              height={16}
            />
            Hidratação
          </Button>

          <Button className="buscaRapidaButton">
            <Image
              src="/sobrancelha.svg"
              alt="Sobrancelha"
              width={16}
              height={16}
            />
            Sobrancelha
          </Button>
        </div>

        <div className="homeBanner">
          <Image 
            alt="Agende nos melhores"
            src="/bannerPizza.png"
            fill
            className="homeBannerImage"
            loading="eager"
          />
        </div>
          
        <h3 className="homeSubTitles">Agendamentos</h3>
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

        <h3 className="homeSubTitles">Recomendados</h3>
        <div className="homeCompaniesContainer">
          {companies.map((company) => (
            <CompaniesCard key={company.id} company={company} />
          ))}
        </div>

        <h3 className="homeSubTitles">Populares</h3>
        <div className="homeCompaniesContainer">
          {popularCompanies.map((popularCompany) => (
            <CompaniesCard key={popularCompany.id} company={popularCompany} />
          ))}
        </div>
      </div>
    </main>
  );
}
