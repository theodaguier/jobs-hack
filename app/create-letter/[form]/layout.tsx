import type { Metadata } from "next";
import styles from "@/sass/styles.module.scss";
import Header from "@/components/Layouts/header";
import { FormProvider } from "@/context/formContext";
import { ModelProvider, useModelContext } from "@/context/modelContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormProvider>
      <ModelProvider>{children}</ModelProvider>
    </FormProvider>
  );
}
