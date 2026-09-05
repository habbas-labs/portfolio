/**
 * PORTFOLIO MODE CONFIGURATION
 * 
 * Controls which presentation view is rendered across the application:
 * 
 * - 'recruiter': Version 3
 *   Focuses on full-time Senior Engineering Career, Interview Control Center,
 *   and Recruiter 30s Fast Path. Hides consulting services, client journey,
 *   and project inquiry drawer.
 * 
 * - 'consultant': Version 4
 *   Focuses on Independent Technology Consulting, Problems Solved, 7 Consulting
 *   Services & Deliverables, 5 Engagement Models, 8-Step Client Journey, and Project Inquiry.
 *   Hides interview control center and recruiter-specific fast-paths.
 * 
 * - 'both': Unified View
 *   Displays both engineering career depth and consulting offerings seamlessly.
 */

export type PortfolioViewMode = 'recruiter' | 'consultant' | 'both';

export interface PortfolioConfig {
  /**
   * Active portfolio presentation mode.
   * Set to 'recruiter', 'consultant', or 'both'.
   */
  mode: PortfolioViewMode;
}

export const portfolioConfig: PortfolioConfig = {
  // Default configured to 'recruiter' (Version 3) per user directive
  mode: 'recruiter',
};

/**
 * Returns true if features intended for recruiters and engineering career presentations should be visible.
 */
export const isRecruiterEnabled = (): boolean => {
  return portfolioConfig.mode === 'recruiter' || portfolioConfig.mode === 'both';
};

/**
 * Returns true if features intended for clients, founders, and technology consulting should be visible.
 */
export const isConsultantEnabled = (): boolean => {
  return portfolioConfig.mode === 'consultant' || portfolioConfig.mode === 'both';
};
