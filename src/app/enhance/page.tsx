import { EnhanceContentForm } from "@/components/enhance/EnhanceContentForm";
import { SectionWrapper } from "@/components/landing/SectionWrapper";

export default function EnhancePage() {
  return (
    <div className="min-h-[calc(100vh-10rem)]">
      <SectionWrapper
        id="ai-tool"
        title="AI-Powered Content Enhancement"
        subtitle="Refine your content to resonate with a Saudi Arabian audience, aligned with Vision 2030."
      >
        <EnhanceContentForm />
      </SectionWrapper>
    </div>
  );
}
