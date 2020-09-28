/**
 * Autor: Christopher siverio
 * fecha: 28-07-2020
 */
class Mapeo {

    static privateUserProfile(user: any) {
        return {
            id: null,
            ig_id: user.graphql.user.id,
            username: user.graphql.user.username,
            name: user.graphql.user.full_name,
            biography: user.graphql.user.biography,
            followers_count: user.graphql.user.edge_followed_by.count,
            follows_count: user.graphql.user.edge_follow.count,
            profile_picture_url:  user.graphql.user.profile_pic_url_hd,
            media_count: user.graphql.user.edge_owner_to_timeline_media.count,
            email: user.graphql.user.business_email
        };
    }

}

export default Mapeo;
