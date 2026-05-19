import PasswordStrengthChecker from './password-strength/password.jsx';
import LogFileAnalyzer from './log-analyzer/logAnalyzer.jsx';
import React, { useState } from 'react';
import { ArrowLeft, Lock, FileSearch } from 'lucide-react';

export default function RegexToolsHub() {
  const [currentView, setCurrentView] = useState('home');

  const tools = [
    {
      id: 'password-checker',
      name: 'Password Strength Checker',
      description: 'Validate password strength using custom regex patterns',
      icon: Lock,
      component: PasswordStrengthChecker
    },
    {
      id: 'log-analyzer',
      name: 'Log File Analyzer',
      description: 'Extract user IDs and IP addresses from system logs',
      icon: FileSearch,
      component: LogFileAnalyzer
    }
  ];

  const currentTool = tools.find(t => t.id === currentView);

  if (currentView !== 'home' && currentTool) {
    const ToolComponent = currentTool.component;
    return (
      <div className="tool-view">
        <div className="back-nav">
          <button
            onClick={() => setCurrentView('home')}
            className="back-button"
          >
            <ArrowLeft className="back-icon" />
            <span>Back to Home</span>
          </button>
        </div>
        <ToolComponent />
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <h1 className="home-title">Regex Tools Hub</h1>
          <p className="home-subtitle">
            Powerful regex-based tools for password validation and log analysis
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => setCurrentView(tool.id)}
                className="tool-card"
              >
                <div className="tool-card-header">
                  <IconComponent className="tool-icon" />
                </div>
                <div className="tool-card-body">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-description">{tool.description}</p>
                  <div className="tool-action">
                    <span>Launch Tool</span>
                    <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="home-footer">
          <p>Built by Kaushik K S with React and powered by Regular Expressions</p>
        </div>
      </div>
    </div>
  );
}