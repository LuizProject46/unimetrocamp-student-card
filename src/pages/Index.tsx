import StudentCard from "@/components/StudentCard";
import { CheckCircle } from "lucide-react";
import { studentData, getLatestEnrollmentDate } from "@/data/studentData";

const Index = () => {
  const latestEnrollment = getLatestEnrollmentDate();
  const activeEnrollment = studentData.enrollments.find(e => e.status === "ATIVO");

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Student Card */}
        <div className="mb-12">
          <StudentCard
            name={studentData.name}
            ra={studentData.ra}
            course={studentData.course}
            institution={studentData.institution}
            campus={studentData.campus}
            validUntil={studentData.validUntil}
            photoUrl={studentData.photoUrl}
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
                  {activeEnrollment?.semester || "2025.1"}
                </span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3">
                <span className="text-muted-foreground text-xs block mb-1">
                  Modalidade
                </span>
                <span className="font-medium text-secondary-foreground">
                  {studentData.modality}
                </span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3">
                <span className="text-muted-foreground text-xs block mb-1">
                  Matrícula desde
                </span>
                <span className="font-medium text-secondary-foreground">
                  {latestEnrollment}
                </span>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3">
                <span className="text-muted-foreground text-xs block mb-1">
                  Válido até
                </span>
                <span className="font-medium text-secondary-foreground">
                  {studentData.validUntil}
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
