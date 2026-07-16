"use client";

import React, { useState, useEffect } from "react";
import { 
  Terminal, 
  Cpu, 
  Database, 
  Globe, 
  Activity, 
  Search, 
  Bell, 
  Settings, 
  ChevronDown,
  Plus,
  Server,
  Zap,
  BarChart2,
  CheckCircle2
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ----------------------------------------------------------------------
// Component 1: Sidebar
// ----------------------------------------------------------------------
const Sidebar = () => {
  const tabs = [
    { name: "Overview", icon: Activity, active: true },
    { name: "Neural Nets", icon: Cpu, active: false },
    { name: "API Logs", icon: Terminal, active: false },
    { name: "Billing", icon: Database, active: false },
  ];

  return (
    <aside className="w-64 h-full border-r border-slate-800 bg-slate-950/80 backdrop-blur-md flex flex-col pt-6 z-10 hidden md:flex">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500 flex items-center justify-center neon-border-glow">
          <Globe className="w-5 h-5 text-cyan-400" />
        </div>
        <span className="text-xl font-bold tracking-wider text-slate-100 neon-text-cyan">
          VibeAI<span className="text-cyan-500">.</span>
        </span>
      </div>

      <div className="px-4 space-y-2 flex-1">
        <p className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Core Systems</p>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                tab.active 
                  ? "bg-slate-800/50 text-cyan-400 border border-slate-700/50 neon-border-glow" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
              )}
            >
              <Icon className="w-4 h-4" />
              {tab.name}
              {tab.active && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      <div className="p-4 mt-auto border-t border-slate-800">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <Cpu className="w-3 h-3 text-purple-400" /> AI CPU Load
            </span>
            <span className="text-xs text-purple-400 font-mono">87%</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
            <div className="bg-purple-500 h-1.5 rounded-full w-[87%] shadow-[0_0_8px_#a855f7] relative">
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

// ----------------------------------------------------------------------
// Component 2: Header
// ----------------------------------------------------------------------
const Header = () => {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-6 z-10 sticky top-0">
      <div className="flex items-center gap-6 flex-1">
        {/* Search */}
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search AI queries, instances, logs..." 
            className="w-full bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-600"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">⌘</span>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* DB Selector */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700/50 bg-slate-800/30 text-sm text-slate-300 hover:bg-slate-800 transition-colors">
          <Server className="w-4 h-4 text-emerald-400" />
          <span>us-east-cluster-1</span>
          <ChevronDown className="w-3 h-3 text-slate-500 ml-2" />
        </button>

        {/* Deploy Button */}
        <button className="relative group overflow-hidden rounded-lg p-[1px]">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg"></span>
          <div className="relative bg-slate-950 px-4 py-2 rounded-lg flex items-center gap-2 transition-all group-hover:bg-slate-900">
            <Plus className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Deploy AI Agent</span>
          </div>
        </button>

        <div className="w-px h-6 bg-slate-800 mx-2 hidden sm:block"></div>

        {/* Actions & Avatar */}
        <button className="relative p-2 text-slate-400 hover:text-slate-200 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_6px_#ec4899]"></span>
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="w-9 h-9 rounded-full border border-cyan-500/30 p-0.5 ml-2 cursor-pointer neon-border-glow overflow-hidden relative group">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80" 
            alt="Sister Avatar" 
            className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
        </div>
      </div>
    </header>
  );
};

// ----------------------------------------------------------------------
// Component 3: Main Metric Chart
// ----------------------------------------------------------------------
const MainMetric = () => {
  return (
    <div className="col-span-1 lg:col-span-3 rounded-2xl bg-slate-900/50 border border-slate-800 p-6 relative overflow-hidden group">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 relative z-10">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            Neural Network Activity
            <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Live</span>
          </h2>
          <p className="text-sm text-slate-400 mt-1">Inferences per second & node saturation</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-2">
          {['1H', '24H', '7D', '30D'].map((time, i) => (
            <button 
              key={time} 
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md transition-colors",
                i === 1 
                  ? "bg-slate-800 text-slate-100 border border-slate-700" 
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Chart */}
      <div className="w-full h-64 relative z-10">
        <svg viewBox="0 0 800 300" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line 
              key={`h-${i}`} 
              x1="0" y1={i * 60} x2="800" y2={i * 60} 
              stroke="rgba(255,255,255,0.05)" 
              strokeDasharray="4 4"
            />
          ))}
          
          {/* Area fill */}
          <path 
            d="M0,250 C100,200 200,220 300,150 C400,80 500,120 600,60 C700,0 800,90 800,90 L800,300 L0,300 Z" 
            fill="url(#gradient-area)"
            className="animate-[pulse-slow_4s_ease-in-out_infinite]"
          />
          
          {/* Main Line */}
          <path 
            d="M0,250 C100,200 200,220 300,150 C400,80 500,120 600,60 C700,0 800,90 800,90" 
            fill="none" 
            stroke="#06b6d4" 
            strokeWidth="3"
            filter="url(#glow)"
            strokeDasharray="1500"
            strokeDashoffset="0"
            style={{ animation: 'dash 3s linear forwards' }}
          />
          
          {/* Inflection Points */}
          {[
            {x: 0, y: 250}, {x: 100, y: 200}, {x: 200, y: 220}, 
            {x: 300, y: 150}, {x: 400, y: 80}, {x: 500, y: 120}, 
            {x: 600, y: 60}, {x: 700, y: 0}, {x: 800, y: 90}
          ].map((point, i) => (
            <g key={`p-${i}`} className="group cursor-pointer">
              <circle 
                cx={point.x} cy={point.y} r="4" 
                fill="#020617" stroke="#06b6d4" strokeWidth="2"
                filter="url(#glow)"
                className="transition-all duration-300 hover:r-6 hover:stroke-white"
              />
              <circle 
                cx={point.x} cy={point.y} r="8" 
                fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1"
                className="animate-ping"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }}
              />
            </g>
          ))}
        </svg>

        {/* Overlay Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-500 font-mono mt-2 pt-2 border-t border-slate-800/50">
          <span>00:00</span>
          <span>04:00</span>
          <span>08:00</span>
          <span>12:00</span>
          <span>16:00</span>
          <span>20:00</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Component 4: Mini-Widgets
// ----------------------------------------------------------------------
const MiniWidgets = () => {
  return (
    <div className="col-span-1 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Widget 1: Tokens */}
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">+14.2%</span>
        </div>
        <h3 className="text-3xl font-bold text-slate-100 mb-1 relative z-10">4.2M</h3>
        <p className="text-sm text-slate-400 font-medium relative z-10">Tokens Processed</p>
      </div>

      {/* Widget 2: API Ping */}
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden neon-line">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
            <Activity className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="text-xs font-medium text-slate-400">Global avg</span>
        </div>
        <h3 className="text-3xl font-bold text-slate-100 mb-1 relative z-10 flex items-end gap-1">
          24 <span className="text-lg text-slate-500 mb-1">ms</span>
        </h3>
        <p className="text-sm text-slate-400 font-medium relative z-10">API Latency</p>
      </div>

      {/* Widget 3: Costs */}
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
            <BarChart2 className="w-5 h-5 text-pink-400" />
          </div>
          <span className="text-xs font-medium text-pink-400 bg-pink-400/10 px-2 py-1 rounded-full">+2.4%</span>
        </div>
        <h3 className="text-3xl font-bold text-slate-100 mb-1 relative z-10 flex items-end gap-1">
          <span className="text-xl text-slate-500 mb-1">$</span>1,249
        </h3>
        <p className="text-sm text-slate-400 font-medium relative z-10">Est. Monthly Cost</p>
      </div>

      {/* Widget 4: AI Accuracy */}
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl relative flex items-center justify-between overflow-hidden">
        <div className="z-10 relative">
          <p className="text-sm text-slate-400 font-medium mb-1">AI Accuracy</p>
          <h3 className="text-3xl font-bold text-slate-100">99.4%</h3>
          <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Nominal range
          </p>
        </div>
        
        {/* Circular Progress */}
        <div className="relative w-24 h-24 z-10 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform">
            <circle cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
            <circle 
              cx="48" cy="48" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" 
              strokeDasharray="226.2" strokeDashoffset="13.57" /* 226.2 * (1 - 0.94) = ~13.57 */
              strokeLinecap="round"
              className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-1000 ease-out" 
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Component 5: Live Event Log
// ----------------------------------------------------------------------
const LiveEventLog = () => {
  const [logs, setLogs] = useState([
    { id: 1, type: "ok", time: "14:22:01", msg: "Claude-3.5-Sonnet connected and ready." },
    { id: 2, type: "sync", time: "14:22:05", msg: "Database vector embeddings updated (240k nodes)." },
    { id: 3, type: "warn", time: "14:22:15", msg: "High traffic detected on endpoint /api/v1/inference." },
    { id: 4, type: "ok", time: "14:22:18", msg: "Auto-scaling triggered: +2 instances deployed." },
  ]);

  useEffect(() => {
    // Simulate incoming logs
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      
      const newLog = {
        id: Date.now(),
        type: Math.random() > 0.8 ? "warn" : "ok",
        time: timeStr,
        msg: Math.random() > 0.8 
          ? "Memory usage approaching threshold (85%)." 
          : "Incoming query processed in 12ms."
      };
      
      setLogs(prev => [newLog, ...prev].slice(0, 10)); // Keep last 10
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-1 lg:col-span-1 bg-[#0a0a0a] rounded-2xl border border-slate-800 flex flex-col overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
        <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-purple-400" />
          System Terminal
        </h3>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.8)] animate-pulse"></div>
        </div>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-3 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none z-10" />
        
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3 animate-fade-in-down">
            <span className="text-slate-600 shrink-0">[{log.time}]</span>
            {log.type === 'ok' && <span className="text-emerald-400 shrink-0">[OK]</span>}
            {log.type === 'warn' && <span className="text-amber-400 shrink-0">[WARN]</span>}
            {log.type === 'sync' && <span className="text-cyan-400 shrink-0">[SYNC]</span>}
            <span className={cn(
              "text-slate-300 break-words",
              log.type === 'warn' && "text-amber-200/80"
            )}>
              {log.msg}
            </span>
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="flex gap-3 items-center">
           <span className="text-slate-600">[{new Date().toLocaleTimeString('en-GB')}]</span>
           <span className="w-2 h-4 bg-purple-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Main Page Layout
// ----------------------------------------------------------------------
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-dot-pattern">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Glow orb behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 z-0">
          <div className="max-w-7xl mx-auto space-y-6">
            
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-100 tracking-tight neon-text-blue">
                Platform Overview
              </h1>
              <p className="text-slate-400 mt-1 text-sm">Real-time metrics and artificial intelligence diagnostics.</p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <MainMetric />
              <LiveEventLog />
              <MiniWidgets />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
