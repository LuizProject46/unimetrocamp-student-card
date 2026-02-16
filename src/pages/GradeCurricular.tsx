import { getCurrentSemester } from "@/data/studentData";
import { BookOpen, Clock, User, CalendarDays, GraduationCap } from "lucide-react";

const GradeCurricular = () => {
  const semester = getCurrentSemester();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-3">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Ciência da Computação
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            Grade Curricular
          </h1>
          {semester ? (
            <p className="text-muted-foreground">
              <CalendarDays className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              {semester.label}
            </p>
          ) : (
            <p className="text-muted-foreground">Semestre atual</p>
          )}
        </div>

        {/* Subjects */}
        {!semester || semester.subjects.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Nenhuma disciplina encontrada
            </h2>
            <p className="text-muted-foreground text-sm">
              Não há disciplinas cadastradas para o semestre atual.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {semester.subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Subject Name */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-foreground text-base">
                      {subject.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <User className="w-3.5 h-3.5 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {subject.professor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex flex-wrap gap-2">
                  {subject.schedule.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2 text-sm"
                    >
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span className="font-medium text-secondary-foreground">
                        {s.day}
                      </span>
                      <span className="text-muted-foreground">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Summary */}
            <div className="bg-secondary/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {semester.subjects.length}
                </span>{" "}
                disciplinas no semestre atual
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradeCurricular;
