function localtunnel {
  lt -s l8a2oxzklqqzzzzzzzzzz9999koklkaindh837646619rnbfbayyu19037 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done


# "webhook": "lt -p 5000 -s l8a2oxzklqq", ./sendgrid_webhook.sh
