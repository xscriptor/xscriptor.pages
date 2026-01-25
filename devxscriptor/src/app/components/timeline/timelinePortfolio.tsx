import { Timeline } from "@/app/components/timeline/timeline";
import styles from "./timelinePortfolio.module.css";

export function PortfolioTimeline() {
  const data = [
    {
      title: "2014",
      content: (
        <div key="timeline-2014">
          <p className="text-neutral-300 mb-4">IT jr analist — Prever S.A.S.</p>
          <ul className="list-disc pl-5 text-sm text-neutral-400">
            <li key="2014-servers">
              ✔ Complete Windows and Linux servers management
              <ul className={`${styles.ulStyles}`}>
                <li key="2014-credentials">
                  ▲ Credentials management
                  <ul className={`${styles.ulStyles}`}>
                    <li key="2014-cred-1">
                      Centralized user and group control (Active Directory,
                      LDAP)
                    </li>
                    <li key="2014-cred-2">Role-based access control (RBAC)</li>
                    <li key="2014-cred-3">SSH key management and rotation</li>
                    <li key="2014-cred-4">
                      Password policy enforcement (complexity, expiration)
                    </li>
                  </ul>
                </li>
                <li key="2014-security">
                  ▲ Information security
                  <ul className={`${styles.ulStyles}`}>
                    <li key="2014-sec-1">Regular OS patching and vulnerability management</li>
                    <li key="2014-sec-2">Firewall configuration and port hardening</li>
                    <li key="2014-sec-3">
                      Log auditing and centralized monitoring (e.g., Graylog,
                      ELK)
                    </li>
                  </ul>
                </li>
                <li key="2014-networking">
                  ▲ Connectivity and networking
                  <ul className={`${styles.ulStyles}`}>
                    <li key="2014-net-1">Static IP/DNS setup and DHCP reservation</li>
                    <li key="2014-net-2">
                      VPN server setup and maintenance (WireGuard, OpenVPN)
                    </li>
                    <li key="2014-net-3">Port forwarding and NAT configuration</li>
                    <li key="2014-net-4">Remote desktop and SSH access provisioning</li>
                    <li key="2014-net-5">Network file sharing (SMB/NFS)</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="list-disc pl-5 text-sm text-neutral-400">
            <li key="2014-database">
              ✔ Database administration and migration to Odoo (formerly OpenERP)
              <ul className={`${styles.ulStyles}`}>
                <li key="2014-legacy">
                  ▲ Legacy database administration (PostgreSQL, MySQL,
                  Oracle...)
                  <ul className={`${styles.ulStyles}`}>
                    <li key="2014-leg-1">
                      Installation, configuration, and user access control
                    </li>
                    <li key="2014-leg-2">Backup routines and replication strategies</li>
                    <li key="2014-leg-3">Data normalization and structure analysis</li>
                  </ul>
                </li>
                <li key="2014-migration">
                  ▲ Migration process toward Odoo
                  <ul className={`${styles.ulStyles}`}>
                    <li key="2014-mig-1">Assessment of legacy systems and ERP alternatives</li>
                    <li key="2014-mig-2">Mapping fields and cleansing inconsistent data</li>
                    <li key="2014-mig-3">
                      Exporting and transforming datasets to fit Odoo schemas
                    </li>
                  </ul>
                </li>
                <li key="2014-odoo">
                  ▲ Odoo deployment and data integration
                  <ul className={`${styles.ulStyles}`}>
                    <li key="2014-odoo-1">Setting up Odoo with PostgreSQL as the backend</li>
                    <li key="2014-odoo-2">Installing essential and custom business modules</li>
                    <li key="2014-odoo-3">Importing data via CSV, XML or direct SQL scripts</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div key="timeline-2017">
          <p className="text-neutral-300 mb-4">
            Financial Portfolio Manager (NYSE/NASDAQ) — Liquidity Hub
          </p>
          <ul className="list-disc pl-5 mt-1 text-sm text-neutral-400">
            <li key="2017-bigdata">
              ▲ Big Data and financial analytics
              <ul className={`${styles.ulStyles}`}>
                <li key="2017-bd-1">
                  Real-time aggregation of market feeds and historical data
                </li>
                <li key="2017-bd-2">
                  Preprocessing of large-scale datasets using Python (Pandas,
                  NumPy)
                </li>
                <li key="2017-bd-3">
                  Integration with financial APIs (Bloomberg, Alpha Vantage,
                  Yahoo Finance)
                </li>
                <li key="2017-bd-4">
                  Machine learning models for risk prediction and asset
                  correlation
                </li>
              </ul>
            </li>
            <li key="2017-graphical">
              ▲ Graphical data interpretation
              <ul className={`${styles.ulStyles}`}>
                <li key="2017-gr-1">
                  Technical chart reading (candlesticks, RSI, MACD, Bollinger
                  Bands)
                </li>
                <li key="2017-gr-2">
                  Development of custom dashboards with D3.js, Plotly or Power
                  BI
                </li>
                <li key="2017-gr-3">
                  Visualization of price-volume anomalies and trend reversals
                </li>
              </ul>
            </li>
            <li key="2017-market">
              ▲ Market perspective & forecasting
              <ul className={`${styles.ulStyles}`}>
                <li key="2017-mk-1">
                  Macro and microeconomic impact analysis on portfolio exposure
                </li>
                <li key="2017-mk-2">
                  Scenario modeling for volatility shifts and liquidity events
                </li>
                <li key="2017-mk-3">
                  Sentiment analysis based on financial news and earnings
                  reports
                </li>
              </ul>
            </li>
            <li key="2017-governance">
              ▲ Confidential data governance
              <ul className={`${styles.ulStyles}`}>
                <li key="2017-gov-1">
                  Secure storage and encryption of portfolio allocation data
                </li>
                <li key="2017-gov-2">
                  Access control and role-based audit trails (GDPR/SEC
                  compliant)
                </li>
                <li key="2017-gov-3">
                  Versioning and traceability of sensitive trading decisions
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div key="timeline-2018">
          <p className="text-neutral-300 mb-4">
            Telecommunications Analyst — Telefónica
          </p>
          <ul className="list-disc pl-5 text-sm text-neutral-400">
            <li key="2018-troubleshooting">
              ▲ Troubleshooting and signal diagnostics
              <ul className={`${styles.ulStyles}`}>
                <li key="2018-tr-1">
                  Detection and resolution of incidents on landline and mobile
                  networks
                </li>
                <li key="2018-tr-2">
                  Real-time analysis of signal degradation and restoration of
                  service
                </li>
                <li key="2018-tr-3">
                  Remote signal testing and escalation of unresolved issues
                </li>
              </ul>
            </li>
            <li key="2018-customer">
              ▲ Customer data and database administration
              <ul className={`${styles.ulStyles}`}>
                <li key="2018-cust-1">
                  Query, update, and validation of customer data in internal
                  systems
                </li>
                <li key="2018-cust-2">
                  Creation and deletion of service records with consistency
                  checks
                </li>
                <li key="2018-cust-3">
                  Maintenance of backend telecom databases (SQL-based tools)
                </li>
              </ul>
            </li>
            <li key="2018-routing">
              ▲ Signal routing and service provisioning
              <ul className={`${styles.ulStyles}`}>
                <li key="2018-rt-1">
                  Configuration of routing tables and signal paths for new
                  connections
                </li>
                <li key="2018-rt-2">Activation and monitoring of voice and data plans</li>
                <li key="2018-rt-3">
                  Coordination with infrastructure teams for physical line
                  deployment
                </li>
              </ul>
            </li>
            <li key="2018-security">
              ▲ Security and compliance checks
              <ul className={`${styles.ulStyles}`}>
                <li key="2018-sec-1">Routine security audits on customer-accessible systems</li>
                <li key="2018-sec-2">
                  Verification of user permissions and protection of sensitive
                  data
                </li>
                <li key="2018-sec-3">
                  Compliance with Telefónica&rsquo;s data handling and privacy
                  protocols
                </li>
              </ul>
            </li>
            <li key="2018-testing">
              ▲ Product testing and reporting
              <ul className={`${styles.ulStyles}`}>
                <li key="2018-test-1">
                  Functional validation of new telecom products before public
                  release
                </li>
                <li key="2018-test-2">
                  Reporting bugs and inconsistencies across different user
                  environments
                </li>
                <li key="2018-test-3">Feedback to R&D for iterative product improvements</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Present",
      content: (
        <div key="timeline-present">
          <h3 className="text-yellow-200">X development</h3>
          <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-sm md:text-base space-y-2">
            <li key="present-degree">
              Completed an{" "}
              <strong>
                Advanced Technical Degree in Web Application Development
              </strong>
              , focused on frontend, backend, databases, and cross-platform
              apps.
            </li>
            <li key="present-uab">
              Earned a certification from the{" "}
              <strong>Universitat Autónoma de Barcelona</strong> in Digital
              Humanities.
            </li>
            <li key="present-google">
              Earned certifications from <strong>Google</strong> in IT Security
              and Technical Support Fundamentals.
            </li>
            <li key="present-openwebinars">
              Earned multiple certifications on <strong>OpenWebinars</strong> in
              jQuery, web security, Bootstrap Fundamentals, PHP Fundamentals,
              Tailwind CSS, and JavaScript.
            </li>
            <li key="present-freelance">
              Worked as a <strong>freelance web administrator</strong>,
              maintaining and optimizing websites for small businesses.
            </li>
            <li key="present-projects">
              Another projects development:{" "}
              <strong>Xscriptor — Xliterato — Dev{""}</strong>, art
              literature and programming portfolios.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
