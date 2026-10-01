import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable, accessible Button component with multiple visual variants.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  target,
  rel,
  ariaLabel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-card focus-visible:outline-navy-900",
    accent: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-card focus-visible:outline-brand-600",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-subtle focus-visible:outline-slate-400",
    outline: "bg-transparent text-slate-800 border border-slate-300 hover:bg-slate-100 hover:border-slate-400 focus-visible:outline-slate-500",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm hover:shadow-card focus-visible:outline-[#25D366]",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-slate-400",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-label={ariaLabel} {...props}>
        {LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {RightIcon && <RightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
        {...props}
      >
        {LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {RightIcon && <RightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {RightIcon && <RightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </button>
  );
};

export default Button;
