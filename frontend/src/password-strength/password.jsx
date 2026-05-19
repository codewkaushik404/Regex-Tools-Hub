import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import { API_BASE_URL } from '../config';
import './style.css';

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);

  const handleCheckPassword = async (value) => {
    setPassword(value);

    if (!value) {
      setData(null);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/password-check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: value,
        }),
      });

      const result = await response.json();

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="password-container">
      <h1>Password Strength Checker</h1>
      <p className="subtitle">Enter a password to check its strength based on custom regex rules.</p>

      <div className="password-input">
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="text"
          value={password}
          onChange={(e) => handleCheckPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      {data && (
        <div className="strength-meter">
          <div className="strength-info">
            <span className="strength-label">Strength: <strong>{data.strength}</strong></span>
            <span className="strength-count">{data.passedRules} of {data.totalRules} requirements met</span>
          </div>
        </div>
      )}

      <div className="rules-list">
        <h3>Password Requirements:</h3>
        {(data?.rules || []).map((rule, index) => {
          return (
            <div
              key={index}
              className={`rule-item ${rule.passed ? 'passed' : 'failed'}`}
            >
              <div className="rule-icon">
                {rule.passed ? (
                  <FaCheckCircle className="icon-check" />
                ) : (
                  <FaTimesCircle className="icon-error" />
                )}
              </div>

              <div className="rule-content">
                <p className="rule-name">{rule.name}</p>
                <p className="rule-description">{rule.description}</p>
                <code className="rule-regex">{rule.regex}</code>
              </div>
            </div>
          );
        })}
      </div>

      <div className="code-example">
        <h3>Usage Example:</h3>
        <pre>
{`const rules = [
  { name: 'Min 8 characters' },
  { name: 'Atleast 1 Uppercase character' },
  { name: 'Atleast 1 Lowercase character' },
  { name: 'Atleast 1 Number' },
  { name: 'Atleast 1 Special character'}
];`
}
        </pre>
      </div>
    </div>
  );
}
