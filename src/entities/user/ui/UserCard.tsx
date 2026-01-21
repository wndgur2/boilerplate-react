import { User } from '../model/types';

interface UserCardProps {
  user: User;
}

/**
 * UserCard component - displays user information
 * Example entity UI component following FSD architecture
 */
export const UserCard = ({ user }: UserCardProps) => {
  const roleColors = {
    admin: 'bg-red-100 text-red-800',
    user: 'bg-blue-100 text-blue-800',
    guest: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{user.name}</h4>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${roleColors[user.role]}`}
        >
          {user.role}
        </span>
      </div>
    </div>
  );
};
