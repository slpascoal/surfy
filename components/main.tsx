import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import "../app/_styles/home.css";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import CompaniesCard from "./companiesCard";
import { quickSearchOptions } from "@/app/_constants/quickSearch";
import BookingCard from "./bookingCard";
import BannerItem from "./bannerItem";

const companies = await prisma.companies.findMany({});
const popularCompanies = await prisma.companies.findMany({
  orderBy: {
    name: "desc",
  },
  take: 5,
});

export default async function Main() {
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
          {quickSearchOptions .map((option) => (
            <Button key={option.title} className="buscaRapidaButton">
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="homeBanner">
          <BannerItem />
        </div>
          
        <h3 className="homeSubTitles">Agendamentos</h3>
        <BookingCard />

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
