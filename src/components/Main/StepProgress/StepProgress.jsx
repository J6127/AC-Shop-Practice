import { ReactComponent as PgComplete } from '../../../icons/pg-complete.svg';

export default function StepProgress( {phase}){

    return(
      <section className="progress-container col col-12">
      <span className={`progress-group ${phase === 'address' ? 'active' : ''}`} data-phase="address">
          <span className="progress-icon">
              <span className="text">1</span>
              <PgComplete className="icon cursor-point" />
          </span>
          <span className="progress-label">寄送地址</span>
      </span>
      <span className="progress-bar" data-order="1"></span>
      <span className={`progress-group ${phase === 'shipping' ? 'active' : ''}`} data-phase="shipping">
          <span className="progress-icon">
              <span className="text">2</span>
              <PgComplete className="icon cursor-point" />
          </span>
          <span className="progress-label">運送方式</span>
      </span>
      <span className="progress-bar" data-order="2"></span>
      <span className={`progress-group ${phase === 'credit-card' ? 'active' : ''}`} data-phase="credit-card">
          <span className="progress-icon">
              <span className="text">3</span>
              <PgComplete className="icon cursor-point" />
          </span>
          <span className="progress-label">付款資訊</span>
      </span>
  </section>)
} 