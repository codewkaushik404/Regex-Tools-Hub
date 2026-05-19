import React, { useState } from 'react';
import { FileText, User, Globe, AlertCircle, Download } from 'lucide-react';
import { API_BASE_URL } from '../config';
import './style.css'; // link to your CSS

export default function LogFileAnalyzer() {
  const [logContent, setLogContent] = useState('');
  const [results, setResults] = useState(null);

  const handleAnalyze = async (content) => {
    setLogContent(content);

    if (!content) {
      setResults(null);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/log-analyzer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
        }),
      });

      const data = await response.json();

      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="log-container">
      <header className="log-header">
        <FileText className="icon-large" />
        <h1>Log File Analyzer</h1>
      </header>

      <p className="log-description">
        Paste your log file content below to extract IP addresses, user IDs, and emails.
      </p>

      {/* Textarea Input */}
      <section className="log-input-section">
        <label>Paste Log Content:</label>
        <textarea
          value={logContent}
          onChange={(e) => handleAnalyze(e.target.value)}
          placeholder="Paste log content here..."
          rows={10}
        ></textarea>
      </section>

      {/* Results Section */}
      {results && (
        <section className="log-results">
          <div className="results-header">
            <h2>Analysis Results</h2>
          </div>

          <div className="summary-grid">
            <div className="summary-card">
              <span>Total Lines</span>
              <strong>{results.lineCount}</strong>
            </div>
            <div className="summary-card">
              <span>IPv4 Addresses</span>
              <strong>{results.ipv4.length}</strong>
            </div>
            <div className="summary-card">
              <span>User IDs</span>
              <strong>{results.userIds.length}</strong>
            </div>
            <div className="summary-card">
              <span>Email Addresses</span>
              <strong>{results.emails.length}</strong>
            </div>
          </div>

          <div className="results-details">
            <div className="result-box">
              <Globe className="icon" />
              <h3>IPv4 Addresses</h3>
              {results.ipv4.length > 0 ? (
                <ul>{results.ipv4.map((ip, i) => <li key={i}>{ip}</li>)}</ul>
              ) : (
                <p className="empty-msg">
                  <AlertCircle className="icon-small" /> None found
                </p>
              )}
            </div>

            <div className="result-box">
              <User className="icon" />
              <h3>User IDs</h3>
              {results.userIds.length > 0 ? (
                <ul>{results.userIds.map((id, i) => <li key={i}>{id}</li>)}</ul>
              ) : (
                <p className="empty-msg">
                  <AlertCircle className="icon-small" /> None found
                </p>
              )}
            </div>

            <div className="result-box">
              <FileText className="icon" />
              <h3>Email Addresses</h3>
              {results.emails.length > 0 ? (
                <ul>{results.emails.map((mail, i) => <li key={i}>{mail}</li>)}</ul>
              ) : (
                <p className="empty-msg">
                  <AlertCircle className="icon-small" /> None found
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
