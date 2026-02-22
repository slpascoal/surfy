import { Company } from "@/app/_interfaces/ICompany";
import { Card, CardContent } from "./ui/card";
import "../app/_styles/companiesCard.css";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";

interface CompaniesCardProps {
  company: Company;
}

export default function CompaniesCard(
  { company }: CompaniesCardProps
) {
  return (
      <Card className="companiesCard">
        <CardContent className="companiesCardContent">
          <div className="companiesCardImage">
            <Image
              fill
              loading="eager"
              src={company.imageUrl}
              alt={company.name}
              className="companiesCardImg"
            />

            <Badge className="companiesCardBadge">
              <StarIcon size={12} className="companiesCardStarIcon"/>
              <p>5,0</p>
            </Badge>
          </div>

          <div className="companiesCardDetails">
            <h3>{company.name}</h3>
            <p>{company.address}</p>
            <Button variant={"secondary"}>Agendar</Button>
          </div>
        </CardContent>
      </Card>
  );
}