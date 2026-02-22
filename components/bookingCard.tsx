import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export default function BookingCard() {
  return (
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
  );
}