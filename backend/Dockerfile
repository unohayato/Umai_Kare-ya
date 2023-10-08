# ベースとなるDockerイメージの指定
FROM python:3.10.8

ENV PYTHONUNBUFFERED 1

# 作業ディレクトリの設定
WORKDIR /code

# 必要なパッケージのインストール
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# アプリケーションのソースコードをコピー
COPY ./config /code/config
COPY ./manage.py /code/
COPY ./static/ /code/static
COPY ./media/ /code/media
# COPY ./app /code/app
# COPY ../../.env /code/.env