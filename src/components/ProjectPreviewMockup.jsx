import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Bot, 
  Calendar, 
  Clock, 
  Utensils, 
  CheckCircle2, 
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

/**
 * Clean, high-fidelity browser/app UI preview mockup for each real project.
 * Designed to look like a polished live preview with easy image replacement support.
 */
export const ProjectPreviewMockup = ({ project }) => {
  const { previewType } = project;

  return (
    <div className="w-full h-52 sm:h-60 bg-slate-900 rounded-t-2xl border-b border-slate-800 overflow-hidden relative flex flex-col select-none">
      {/* Mini Chrome Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/80 border-b border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="px-2.5 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-300 max-w-[200px] truncate">
          preview.{project.slug}.local
        </div>
        <div className="w-10" />
      </div>

      {/* Screen Content by Project Type */}
      <div className="flex-1 p-3.5 overflow-hidden flex flex-col justify-between">
        {/* Project 1: Mudra Event */}
        {previewType === 'event' && (
          <div className="h-full flex flex-col justify-between text-white space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold tracking-wider text-amber-300 uppercase">Mudra Event</span>
              </div>
              <span className="text-[10px] text-slate-400">Weddings & Stage Decor</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center hover:bg-white/10 transition">
                <div className="w-6 h-6 mx-auto mb-1 rounded bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs">
                  💐
                </div>
                <div className="text-[10px] font-semibold text-slate-200">Floral Stages</div>
                <div className="text-[8px] text-slate-400">12+ Themes</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center hover:bg-white/10 transition">
                <div className="w-6 h-6 mx-auto mb-1 rounded bg-rose-500/20 text-rose-300 flex items-center justify-center text-xs">
                  ✨
                </div>
                <div className="text-[10px] font-semibold text-slate-200">Mandap Sets</div>
                <div className="text-[8px] text-slate-400">Traditional</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center hover:bg-white/10 transition">
                <div className="w-6 h-6 mx-auto mb-1 rounded bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs">
                  🎉
                </div>
                <div className="text-[10px] font-semibold text-slate-200">Receptions</div>
                <div className="text-[8px] text-slate-400">Lighting & Entry</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
              <span>Photo Gallery Showcase</span>
              <span className="text-amber-400 font-medium">Django & MySQL Backend</span>
            </div>
          </div>
        )}

        {/* Project 2: Hotel Tejas */}
        {previewType === 'restaurant' && (
          <div className="h-full flex flex-col justify-between text-white space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase">Hotel Tejas</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono">
                Order Tracking
              </span>
            </div>

            {/* Chatbot conversation snippet */}
            <div className="space-y-1.5 my-auto">
              <div className="flex items-start gap-1.5 max-w-[85%] bg-slate-800/90 border border-slate-700/80 rounded-xl rounded-tl-none p-2 text-[10px]">
                <Bot className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">
                  "Welcome! Would you like today's chef specials or to reorder your favorite?"
                </span>
              </div>
              <div className="flex items-center justify-end">
                <div className="bg-emerald-600/90 text-white rounded-xl rounded-tr-none px-2.5 py-1 text-[10px] font-medium">
                  Paneer Butter Masala x 2 & Roti
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" /> Live Status: In Preparation
              </span>
              <span className="text-emerald-400 font-medium">FastAPI & Dialogflow</span>
            </div>
          </div>
        )}

        {/* Project 3: Smart Mock Interview */}
        {previewType === 'ai-interview' && (
          <div className="h-full flex flex-col justify-between text-white space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-bold tracking-wider text-blue-300 uppercase">Smart Mock AI</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[9px] font-mono">
                Ollama Engine
              </span>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-2.5 space-y-1.5 my-auto">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-300 font-semibold">Q2: Explain indexing in MySQL</span>
                <span className="text-blue-400 font-mono text-[9px]">Score: 8.5/10</span>
              </div>
              <div className="w-full bg-slate-700/60 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full w-[85%]" />
              </div>
              <p className="text-[9px] text-slate-400 truncate">
                AI Feedback: "Strong explanation of B-Tree structure and primary vs secondary index."
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-blue-400" /> Real-time Evaluation
              </span>
              <span className="text-blue-400 font-medium">Spring Boot & MySQL</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPreviewMockup;
