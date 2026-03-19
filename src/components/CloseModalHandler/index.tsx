"use client";

import { useRouter } from "next/navigation";
import { Modal } from "@/components/Modal";

export function CloseModalHandler({ children, title }: { children: React.ReactNode; title: string }) {
  const router = useRouter();
  return (
    <Modal closeModal={() => router.back()} title={title}>
      {children}
    </Modal>
  );
}