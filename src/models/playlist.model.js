import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      type: {
        type: String,
        required: true,
      },
    },
    description: {
      type: {
        type: String,
        required: true,
      },
    },
    videos: [
      {
        type: {
          type: Schema.Types.ObjectId,
          ref: "Video"
        },
      },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
