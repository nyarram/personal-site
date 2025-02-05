'use client'

type SocialIconProps = {
  href: string;
  platform: 'linkedin' | 'github' | 'email';
};

export const SocialIcon = ({ href, platform }: SocialIconProps) => {
  const getIcon = () => {
    switch (platform) {
      case 'linkedin':
        return 'LinkedIn';
      case 'github':
        return 'GitHub';
      case 'email':
        return 'Email';
      default:
        return '';
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {getIcon()}
    </a>
  );
}; 