export { User } from '@supabase/supabase-js';
import { UserState } from '@supabase/auth-helpers-shared';

interface Props {
    supabaseClient: SupabaseClient;
    callbackUrl?: string;
    profileUrl?: string;
    user?: User;
    fetcher?: UserFetcher;
    autoRefreshToken?: boolean;
    [propName: string]: any;
}
declare const UserProvider: (props: Props) => JSX.Element;
declare const useUser: () => UserState;

export { UserProvider, useUser };
