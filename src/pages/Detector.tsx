import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { platforms, PlatformType, getFieldLabel, getFieldPlaceholder } from "@/lib/platforms";
import { analyzeProfile, AnalysisResult } from "@/lib/analyzer";
import { PlatformCard } from "@/components/detector/PlatformCard";
import { DetectionForm } from "@/components/detector/DetectionForm";
import { ResultsDisplay } from "@/components/detector/ResultsDisplay";

type Step = "platform" | "form" | "result";

export default function DetectorPage() {
  const [step, setStep] = useState<Step>("platform");
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handlePlatformSelect = (platform: PlatformType) => {
    setSelectedPlatform(platform);
    setFormData({});
    setStep("form");
  };

  const handleAnalyze = async () => {
    if (!selectedPlatform) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const analysisResult = analyzeProfile(selectedPlatform, formData);
    setResult(analysisResult);
    setIsAnalyzing(false);
    setStep("result");
  };

  const handleReset = () => {
    setStep("platform");
    setSelectedPlatform(null);
    setFormData({});
    setResult(null);
  };

  const currentPlatform = platforms.find(p => p.id === selectedPlatform);

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Progress indicator */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {["platform", "form", "result"].map((s, index) => (
                <div key={s} className="flex items-center">
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                    ${step === s || (step === "result" && index < 2) || (step === "form" && index === 0)
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                    }
                  `}>
                    {(step === "result" && index < 2) || (step === "form" && index === 0) ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  {index < 2 && (
                    <div className={`
                      w-24 sm:w-32 h-0.5 mx-2
                      ${(step === "form" && index === 0) || (step === "result")
                        ? "bg-primary"
                        : "bg-border"
                      }
                    `} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-muted-foreground">Select Platform</span>
              <span className="text-xs text-muted-foreground">Enter Details</span>
              <span className="text-xs text-muted-foreground">View Results</span>
            </div>
          </div>

          {/* Step Content */}
          {step === "platform" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Select a <span className="gradient-text">Platform</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose the social media platform where you found the suspicious account. 
                  Our AI is trained to detect platform-specific fake account patterns.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {platforms.map((platform, index) => (
                  <PlatformCard
                    key={platform.id}
                    platform={platform}
                    onClick={() => handlePlatformSelect(platform.id)}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {step === "form" && currentPlatform && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" onClick={() => setStep("platform")}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>

              <DetectionForm
                platform={currentPlatform}
                formData={formData}
                setFormData={setFormData}
                onAnalyze={handleAnalyze}
                isAnalyzing={isAnalyzing}
              />
            </div>
          )}

          {step === "result" && result && currentPlatform && (
            <div className="animate-fade-in">
              <ResultsDisplay
                result={result}
                platform={currentPlatform}
                onReset={handleReset}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
