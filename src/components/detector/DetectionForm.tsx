import { Loader2, Search, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PlatformInfo, getFieldLabel, getFieldPlaceholder } from "@/lib/platforms";

interface DetectionFormProps {
  platform: PlatformInfo;
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export function DetectionForm({ platform, formData, setFormData, onAnalyze, isAnalyzing }: DetectionFormProps) {
  const Icon = platform.icon;

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card-glass rounded-2xl p-8 border border-border/50">
        {/* Platform Header */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.bgGradient} flex items-center justify-center`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">{platform.name} Detector</h2>
            <p className="text-sm text-muted-foreground">Enter profile details for AI analysis</p>
          </div>
        </div>

        {/* What we analyze */}
        <div className="mb-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            What our AI analyzes:
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {platform.analyzeCriteria.map((criteria, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {criteria}
              </li>
            ))}
          </ul>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {platform.fields.map((field) => (
            <div key={field} className="space-y-2">
              <Label htmlFor={field} className="text-sm font-medium">
                {getFieldLabel(field)}
              </Label>
              {field === "bio" ? (
                <Textarea
                  id={field}
                  placeholder={getFieldPlaceholder(field)}
                  value={formData[field] || ""}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="input-cyber min-h-[100px]"
                />
              ) : (
                <Input
                  id={field}
                  type={field.includes("Count") || field.includes("followers") || field.includes("following") || field.includes("friends") || field.includes("Score") ? "number" : "text"}
                  placeholder={getFieldPlaceholder(field)}
                  value={formData[field] || ""}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="input-cyber"
                />
              )}
            </div>
          ))}
        </div>

        {/* Analyze Button */}
        <div className="mt-8">
          <Button
            variant="cyber"
            size="xl"
            className="w-full"
            onClick={onAnalyze}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing with AI...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Analyze Profile
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
