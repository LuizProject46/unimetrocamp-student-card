import StudentCard from "@/components/StudentCard";
import { Shield, CheckCircle } from "lucide-react";
import studentPhoto from "@/assets/student-photo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Carteirinha Digital Oficial
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Carteirinha de Estudante
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            UniMetrocamp Wyden • Ensino Superior de Qualidade
          </p>
        </header>

        {/* Student Card */}
        <div className="mb-12">
          <StudentCard
            name="Luiz Gustavo Moreira de Oliveira"
            ra="202051417341"
            course="Ciência da Computação"
            institution="UniMetrocamp"
            campus="Campinas"
            validUntil="12/2026"
            photoUrl={studentPhoto}
          />
        </div>

        {/* Status Section */}
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">
                  Matrícula Ativa
                </h3>
                <p className="text-sm text-muted-foreground">
                  Estudante regularmente matriculado
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-secondary/50 rounded-lg p-3">
                <span className="text-muted-foreground text-xs block mb-1">
                  Período
                </span>
                <span className="font-medium text-secondary-foreground">
                  2025.1
                </span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3">
                <span className="text-muted-foreground text-xs block mb-1">
                  Modalidade
                </span>
                <span className="font-medium text-secondary-foreground">
                  Presencial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 UniMetrocamp Wyden. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Grupo YDUQS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
