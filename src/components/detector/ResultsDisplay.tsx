import { AlertTriangle, CheckCircle, Shield, ShieldAlert, RefreshCw, Lightbulb, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnalysisResult } from "@/lib/analyzer";
import { PlatformInfo } from "@/lib/platforms";

interface ResultsDisplayProps {
  result: AnalysisResult;
  platform: PlatformInfo;
  onReset: () => void;
}

export function ResultsDisplay({ result, platform, onReset }: ResultsDisplayProps) {
  const Icon = platform.icon;
  
  const getRiskColor = () => {
    switch (result.riskLevel) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
    }
  };

  const getRiskBg = () => {
    switch (result.riskLevel) {
      case "low": return "bg-success/10 border-success/30";
      case "medium": return "bg-warning/10 border-warning/30";
      case "high": return "bg-destructive/10 border-destructive/30";
    }
  };

  const getRiskGlow = () => {
    switch (result.riskLevel) {
      case "low": return "glow-success";
      case "medium": return "glow-warning";
      case "high": return "glow-destructive";
    }
  };

  const getRiskFill = () => {
    switch (result.riskLevel) {
      case "low": return "risk-low";
      case "medium": return "risk-medium";
      case "high": return "risk-high";
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Main Result Card */}
      <div className={`card-glass rounded-2xl p-8 border ${result.isFake ? "border-destructive/30" : "border-success/30"} mb-6`}>
        {/* Platform & Status Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.bgGradient} flex items-center justify-center`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold">{platform.name} Analysis</h2>
              <p className="text-sm text-muted-foreground">AI Detection Complete</p>
            </div>
          </div>
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${getRiskBg()}`}>
            {result.isFake ? (
              <ShieldAlert className={`w-5 h-5 ${getRiskColor()}`} />
            ) : (
              <Shield className={`w-5 h-5 ${getRiskColor()}`} />
            )}
            <span className={`font-semibold ${getRiskColor()}`}>
              {result.isFake ? "Likely Fake" : "Likely Real"}
            </span>
          </div>
        </div>

        {/* Risk Meter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Fake Probability</span>
            <span className={`text-2xl font-display font-bold ${getRiskColor()}`}>
              {result.fakePercentage}%
            </span>
          </div>
          <div className="risk-meter">
            <div 
              className={`risk-fill ${getRiskFill()}`}
              style={{ width: `${result.fakePercentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Low Risk</span>
            <span>Medium Risk</span>
            <span>High Risk</span>
          </div>
        </div>

        {/* Risk Level Badge */}
        <div className={`flex items-center justify-center gap-3 p-4 rounded-xl ${getRiskBg()} ${getRiskGlow()} mb-8`}>
          {result.riskLevel === "low" && <CheckCircle className="w-8 h-8 text-success" />}
          {result.riskLevel === "medium" && <AlertTriangle className="w-8 h-8 text-warning" />}
          {result.riskLevel === "high" && <XCircle className="w-8 h-8 text-destructive" />}
          <div>
            <span className={`font-display font-bold text-xl ${getRiskColor()}`}>
              {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)} Risk
            </span>
            <p className="text-sm text-muted-foreground">
              {result.riskLevel === "low" && "This profile appears authentic"}
              {result.riskLevel === "medium" && "Exercise caution with this profile"}
              {result.riskLevel === "high" && "This profile shows significant red flags"}
            </p>
          </div>
        </div>

        {/* AI Explanation */}
        <div className="p-4 rounded-xl bg-secondary/50 mb-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-accent" />
            AI Analysis Explanation
          </h4>
          <p className="text-sm text-muted-foreground">{result.explanation}</p>
        </div>
      </div>

      {/* Red Flags */}
      {result.redFlags.length > 0 && (
        <div className="card-glass rounded-2xl p-6 border border-destructive/20 mb-6">
          <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Detected Red Flags ({result.redFlags.length})
          </h3>
          <ul className="space-y-3">
            {result.redFlags.map((flag, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-muted-foreground">{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Safety Tips */}
      <div className="card-glass rounded-2xl p-6 border border-accent/20 mb-8">
        <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-accent" />
          Safety Recommendations
        </h3>
        <ul className="space-y-3">
          {result.safetyTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-accent" />
              </div>
              <span className="text-muted-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="cyber" size="lg" onClick={onReset}>
          <RefreshCw className="w-5 h-5" />
          Analyze Another Profile
        </Button>
        <Button variant="outline" size="lg" onClick={onReset}>
          Try Different Platform
        </Button>
      </div>
    </div>
  );
}
