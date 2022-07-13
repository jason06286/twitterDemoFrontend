<script setup>
import { $vfm } from 'vue-final-modal';

import useProfilePostsStore from '@/stores/profilePosts';
import useFollowStore from '@/stores/follow';
import useUserStore from '@/stores/user';

import { apiGetProfile, apiGetFollow } from '@/api/api';

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const followStore = useFollowStore();
const profilePostsStore = useProfilePostsStore();

const userProfile = ref([]);

const following = ref([]);
const follower = ref([]);
const isLoading = ref(false);
const isAdmin = computed(() => route.params.id === userStore.user.id);
const coverImage = computed(() =>
  isAdmin ? userStore.user.coverImage : userProfile.coverImage
);

const isShowAddPostModal = ref(false);
const isShowEditPostModal = ref(false);
const isShowFollowingModal = ref(false);
const isShowFollowerModal = ref(false);
const isShowResetPasswordModal = ref(false);
const isShowEditProfileModal = ref(false);

const judgeFollowing = (id) => {
  const filter = followStore.following.filter((item) => item.user.id === id);
  return filter.length;
};
const showEditPostModal = (id) => {
  isShowEditPostModal.value = true;
  $vfm.show(id);
};

const getProfilePosts = async (id = userProfile.value.user.id) => {
  isLoading.value = true;
  await profilePostsStore.getProfilePosts(id);
  isLoading.value = false;
};

const getFollow = async (id) => {
  try {
    const res = await apiGetFollow(id);
    following.value = res.data.data.following;
    follower.value = res.data.data.follower;
  } catch (error) {
    console.error(error);
  }
};

const toggleFollow = async (id) => {
  await followStore.toggleFollow(id);
  await getFollow(route.params.id);
};
const init = async () => {
  isLoading.value = true;
  try {
    const res = await apiGetProfile(route.params.id);

    userProfile.value = res.data.data;

    await getProfilePosts(userProfile.value.user.id);
    await getFollow(route.params.id);
    await followStore.getFollow(userStore.user.id);
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};
watch(
  () => route.params.id,
  async () => {
    if (route.params.id === undefined) return;
    await init();
  }
);
onMounted(async () => {
  isLoading.value = true;
  await init();
});
</script>
<template v-if="userProfile">
  <Loading :is-loading="isLoading" />
  <Navbar />
  <div
    class="relative h-auto bg-cover bg-center shadow-md before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:via-black/90 before:to-black sm:mt-[48px]"
    :style="{
      backgroundImage: 'url(' + coverImage + ')',
    }"
  >
    <div class="container m-auto">
      <div
        :style="{
          backgroundImage: 'url(' + coverImage + ')',
        }"
        class="relative h-[150px] w-full bg-cover bg-center before:absolute before:inset-0 before:bg-black/10 sm:h-[300px] lg:h-[400px]"
      ></div>
      <div
        class="relative flex flex-col items-center justify-center px-5 py-5 lg:flex-row"
      >
        <div
          class="-mt-12 h-32 w-32 overflow-hidden rounded-full border-4 border-black"
        >
          <img
            :src="isAdmin ? userStore?.user?.photo : userProfile?.user?.photo"
            alt="avatar"
            class="block h-auto w-full"
          />
        </div>
        <div class="ml-5 text-gray-400">
          <h2 class="mb-3 text-center text-2xl font-bold text-gray-300">
            {{ userProfile?.user?.name }}
          </h2>
          <div class="flex">
            <p class="border-r pr-2">
              正在追蹤
              <span
                v-if="!following.length"
                class="cursor-pointer hover:text-blue-400"
                >0</span
              >
              <span
                v-else
                class="cursor-pointer hover:text-blue-400"
                @click="isShowFollowingModal = true"
                >{{ following.length }}</span
              >
              人
            </p>
            <p class="pl-2">
              <span
                v-if="!follower.length"
                class="cursor-pointer hover:text-blue-400"
                >0</span
              >
              <span
                v-else
                class="cursor-pointer hover:text-blue-400"
                @click="isShowFollowerModal = true"
                >{{ follower.length }}</span
              >
              位追蹤者
            </p>
          </div>
        </div>

        <div v-if="isAdmin" class="my-5 flex gap-3 lg:my-0 lg:ml-auto">
          <button
            type="button"
            class="confirm-btn bg-blue-900/50"
            @click="isShowEditProfileModal = true"
          >
            <ic:round-edit class="mr-1" /> 編輯個人資料
          </button>
          <button
            v-if="!userStore.user.isThirdPartyLogin"
            type="button"
            class="confirm-btn bg-gray-400/60"
            @click="isShowResetPasswordModal = true"
          >
            <ic:round-lock class="mr-1" /> 重設密碼
          </button>
        </div>
        <div v-else class="my-5 flex gap-3 lg:my-0 lg:ml-auto">
          <button
            v-if="!judgeFollowing(route.params.id)"
            type="button"
            class="confirm-btn bg-blue-900/50"
            @click="followStore.toggleFollow(route.params.id)"
          >
            追蹤起來
          </button>
          <button
            v-else
            type="button"
            class="cancel-btn bg-red-900/50"
            @click="followStore.toggleFollow(route.params.id)"
          >
            取消追蹤
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container m-auto mt-8">
    <div class="grid grid-cols-1 gap-x-8 lg:grid-cols-6">
      <div class="col-auto lg:col-span-2">
        <div
          class="mb-5 w-full rounded-md bg-black p-3 text-gray-400 shadow-md"
        >
          <h2 class="text-xl font-bold">關於</h2>
          <DotLine class="my-3" />
          <div>
            {{ userProfile?.description }}
          </div>
        </div>
      </div>
      <div class="col-auto lg:col-span-4">
        <div
          v-if="isAdmin"
          class="mb-5 flex items-center rounded-md bg-black px-5 py-3"
        >
          <div
            class="mr-3 h-10 w-10 flex-shrink-0 overflow-hidden rounded-full md:h-12 md:w-12"
          >
            <img :src="userProfile?.user?.photo" alt="avatar" />
          </div>
          <div
            class="group w-full flex-shrink cursor-pointer rounded-full bg-blue-900/50 px-4 py-1 hover:bg-blue-500/40 md:py-3 md:px-5"
            @click="isShowAddPostModal = true"
          >
            <p class="font-semibold text-gray-400 group-hover:text-blue-500">
              What's happening?
            </p>
          </div>
        </div>
        <div
          v-if="!profilePostsStore?.posts.length"
          class="mb-5 flex items-center justify-center gap-3 rounded-md bg-black p-5 text-gray-400"
        >
          <p class="text-sm">沒有相關貼文，分享你發生的事!</p>
          <button
            v-if="isAdmin"
            type="button"
            class="confirm-btn bg-blue-900/50"
            @click="isShowAddPostModal = true"
          >
            新增貼文
          </button>
        </div>
        <Post
          v-for="post in profilePostsStore?.posts"
          :key="post.id"
          :post="post"
          :is-admin="isAdmin"
          @init="init"
          @showEditPostModal="showEditPostModal"
        />
      </div>
    </div>
  </div>
  <FollwerModal
    v-model="isShowFollowerModal"
    :follower="follower"
    :following="following"
    @toggleFollow="toggleFollow"
  />
  <FollowingModal
    v-model="isShowFollowingModal"
    :following="following"
    @toggleFollow="toggleFollow"
  />
  <PublishPostModal v-model="isShowAddPostModal" @publish="init">
  </PublishPostModal>
  <template v-for="post in profilePostsStore?.posts">
    <EditPostModal
      v-if="!post.share"
      :key="post.id"
      :post="post"
      @confirm="getProfilePosts"
    >
    </EditPostModal>
  </template>
  <ResetPasswordModal v-model="isShowResetPasswordModal" />
  <EditProfileModal v-model="isShowEditProfileModal" @init="init" />
</template>
<style></style>
