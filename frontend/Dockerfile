# ベースとなるイメージを指定
FROM node:18

# 作業ディレクトリを指定
WORKDIR /code


# Reactアプリケーションを作成
RUN npx create-react-app frontend

# 作成したReactアプリケーションのディレクトリに移動
WORKDIR /code/frontend

# 必要なパッケージをインストール
RUN npm install axios