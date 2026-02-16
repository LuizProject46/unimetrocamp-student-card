import studentPhoto from "@/assets/student-photo.png";

export interface Subject {
  name: string;
  professor: string;
  schedule: {
    day: string;
    time: string;
  }[];
}

export interface Semester {
  id: string;
  label: string;
  active: boolean;
  subjects: Subject[];
}

export interface Enrollment {
  date: string;
  semester: string;
  status: "ATIVO" | "INATIVO" | "TRANCADO";
}

export interface StudentData {
  name: string;
  ra: string;
  course: string;
  institution: string;
  campus: string;
  validUntil: string;
  modality: string;
  photoUrl: string;
  enrollments: Enrollment[];
  semesters: Semester[];
}

export const studentData: StudentData = {
  name: "Luiz Gustavo Moreira de Oliveira",
  ra: "202051417341",
  course: "Ciência da Computação",
  institution: "UniMetrocamp",
  campus: "Campinas",
  validUntil: "12/2026",
  modality: "Presencial",
  photoUrl: studentPhoto,
  enrollments: [
    { date: "02/2020", semester: "2020.1", status: "INATIVO" },
    { date: "08/2020", semester: "2020.2", status: "INATIVO" },
    { date: "02/2021", semester: "2021.1", status: "INATIVO" },
    { date: "08/2021", semester: "2021.2", status: "INATIVO" },
    { date: "02/2022", semester: "2022.1", status: "INATIVO" },
    { date: "08/2022", semester: "2022.2", status: "INATIVO" },
    { date: "02/2023", semester: "2023.1", status: "INATIVO" },
    { date: "08/2023", semester: "2023.2", status: "INATIVO" },
    { date: "02/2024", semester: "2024.1", status: "INATIVO" },
    { date: "08/2024", semester: "2024.2", status: "INATIVO" },
    { date: "02/2025", semester: "2025.1", status: "ATIVO" },
  ],
  semesters: [
    {
      id: "2025.1",
      label: "2025 – 1º Semestre",
      active: true,
      subjects: [
        {
          name: "Inteligência Artificial",
          professor: "Prof. Dr. Ricardo Mendes",
          schedule: [
            { day: "Segunda", time: "19:00 - 20:40" },
            { day: "Quarta", time: "19:00 - 20:40" },
          ],
        },
        {
          name: "Compiladores",
          professor: "Prof. Dr. Ana Paula Silva",
          schedule: [
            { day: "Terça", time: "19:00 - 20:40" },
            { day: "Quinta", time: "19:00 - 20:40" },
          ],
        },
        {
          name: "Engenharia de Software II",
          professor: "Prof. Ms. Carlos Eduardo Souza",
          schedule: [
            { day: "Segunda", time: "21:00 - 22:40" },
          ],
        },
        {
          name: "Redes de Computadores",
          professor: "Prof. Dr. Marcos Antônio Lima",
          schedule: [
            { day: "Quarta", time: "21:00 - 22:40" },
            { day: "Sexta", time: "19:00 - 20:40" },
          ],
        },
        {
          name: "Computação Gráfica",
          professor: "Prof. Ms. Juliana Ferreira",
          schedule: [
            { day: "Terça", time: "21:00 - 22:40" },
          ],
        },
        {
          name: "Projeto Integrador V",
          professor: "Prof. Dr. Ricardo Mendes",
          schedule: [
            { day: "Quinta", time: "21:00 - 22:40" },
          ],
        },
      ],
    },
  ],
};

// Get the latest active enrollment date
export function getLatestEnrollmentDate(): string {
  const activeEnrollments = studentData.enrollments.filter(
    (e) => e.status === "ATIVO"
  );
  if (activeEnrollments.length > 0) {
    return activeEnrollments[activeEnrollments.length - 1].date;
  }
  return studentData.enrollments[studentData.enrollments.length - 1].date;
}

// Get the current active semester
export function getCurrentSemester(): Semester | undefined {
  return studentData.semesters.find((s) => s.active);
}
