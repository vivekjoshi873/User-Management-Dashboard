import { useUsers } from '@/contexts/UserContext';
import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import Layout from '@/components/Layout';
import { Loader2, Users as UsersIcon } from 'lucide-react';

const Home = () => {
  const { filteredUsers, loading, error, searchQuery, setSearchQuery } = useUsers();

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
            <p className="text-muted-foreground">Loading users...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
              <UsersIcon className="w-8 h-8 text-destructive" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Error loading users</h2>
              <p className="text-muted-foreground">{error}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Users</h2>
            <p className="text-muted-foreground">
              Manage and view all users ({filteredUsers.length} total)
            </p>
          </div>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name or email..."
          />
        </div>

        {filteredUsers.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No users found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? 'Try adjusting your search query' : 'Start by adding some users'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
